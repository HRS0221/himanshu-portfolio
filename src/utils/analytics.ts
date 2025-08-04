// Google Analytics 4 and Performance Monitoring
export interface AnalyticsEvent {
  event: string;
  event_category: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
}

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
}

class Analytics {
  private isEnabled: boolean;
  private performanceMetrics: PerformanceMetric[] = [];

  constructor() {
    this.isEnabled = typeof window !== "undefined" && !!window.gtag;
  }

  // Track custom events
  trackEvent(event: AnalyticsEvent): void {
    if (!this.isEnabled) return;

    try {
      window.gtag("event", event.event, {
        event_category: event.event_category,
        event_label: event.event_label,
        value: event.value,
        ...event
      });
    } catch (error) {
      console.warn("Analytics tracking failed:", error);
    }
  }

  // Track page views
  trackPageView(page: string, title?: string): void {
    if (!this.isEnabled) return;

    try {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID!, {
        page_title: title || page,
        page_location: window.location.href,
        page_path: page
      });
    } catch (error) {
      console.warn("Page view tracking failed:", error);
    }
  }

  // Track user interactions
  trackInteraction(element: string, action: string, value?: string): void {
    this.trackEvent({
      event: "user_interaction",
      event_category: "engagement",
      event_label: `${element}_${action}`,
      element,
      action,
      value
    });
  }

  // Track performance metrics
  trackPerformance(name: string, value: number, unit: string = "ms"): void {
    const metric: PerformanceMetric = {
      name,
      value,
      unit,
      timestamp: Date.now()
    };

    this.performanceMetrics.push(metric);

    // Send to analytics if enabled
    if (this.isEnabled) {
      this.trackEvent({
        event: "performance_measurement",
        event_category: "performance",
        event_label: name,
        value: Math.round(value),
        unit
      });
    }
  }

  // Track Core Web Vitals
  trackCoreWebVitals(): void {
    if (typeof window === "undefined") return;

    // Track LCP (Largest Contentful Paint)
    if ("PerformanceObserver" in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.trackPerformance("LCP", lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

      // Track FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.trackPerformance("FID", entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ["first-input"] });

      // Track CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.trackPerformance("CLS", clsValue * 1000, "score");
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });
    }
  }

  // Track search analytics
  trackSearch(query: string, results: number, timeSpent: number): void {
    this.trackEvent({
      event: "search",
      event_category: "engagement",
      event_label: "project_search",
      search_term: query,
      results_count: results,
      time_spent: timeSpent
    });
  }

  // Track filter usage
  trackFilter(filter: string, results: number): void {
    this.trackEvent({
      event: "filter_usage",
      event_category: "engagement",
      event_label: filter,
      results_count: results
    });
  }

  // Track project engagement
  trackProjectView(projectSlug: string, projectTitle: string): void {
    this.trackEvent({
      event: "project_view",
      event_category: "engagement",
      event_label: projectSlug,
      project_title: projectTitle
    });
  }

  // Track scroll depth
  trackScrollDepth(depth: number): void {
    this.trackEvent({
      event: "scroll_depth",
      event_category: "engagement",
      event_label: "page_scroll",
      scroll_percentage: depth
    });
  }

  // Track time on page
  trackTimeOnPage(timeSpent: number): void {
    this.trackEvent({
      event: "time_on_page",
      event_category: "engagement",
      event_label: "page_engagement",
      time_spent: timeSpent
    });
  }

  // Get performance metrics
  getPerformanceMetrics(): PerformanceMetric[] {
    return [...this.performanceMetrics];
  }

  // Clear performance metrics
  clearPerformanceMetrics(): void {
    this.performanceMetrics = [];
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Performance monitoring utilities
export const performanceUtils = {
  // Measure function execution time
  measureFunction<T>(name: string, fn: () => T): T {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    
    analytics.trackPerformance(name, end - start);
    return result;
  },

  // Measure async function execution time
  async measureAsyncFunction<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    
    analytics.trackPerformance(name, end - start);
    return result;
  },

  // Measure component render time
  measureComponentRender(componentName: string, renderFn: () => void): void {
    const start = performance.now();
    renderFn();
    const end = performance.now();
    
    analytics.trackPerformance(`${componentName}_render`, end - start);
  }
};

// Scroll depth tracking
export const scrollTracking = {
  init(): void {
    if (typeof window === "undefined") return;

    let maxScrollDepth = 0;
    let scrollTimeout: NodeJS.Timeout;

    const trackScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        
        // Track at 25%, 50%, 75%, 100%
        if ([25, 50, 75, 100].includes(maxScrollDepth)) {
          analytics.trackScrollDepth(maxScrollDepth);
        }
      }
    };

    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(trackScroll, 100);
    });
  }
};

// Time on page tracking
export const timeTracking = {
  startTime: Date.now(),

  init(): void {
    if (typeof window === "undefined") return;

    window.addEventListener("beforeunload", () => {
      const timeSpent = Date.now() - this.startTime;
      analytics.trackTimeOnPage(timeSpent);
    });
  },

  reset(): void {
    this.startTime = Date.now();
  }
}; 