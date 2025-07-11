import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ReactNode } from "react";
import { 
  Heading,
  Text,
  InlineCode,
  CodeBlock,
  Media,
  SmartLink,
} from "@once-ui-system/core";

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  children?: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  if (!href) return <>{children}</>;
  if (href.startsWith("/")) return <SmartLink href={href} {...props}>{children}</SmartLink>;
  if (href.startsWith("#")) return <a href={href} {...props}>{children}</a>;
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}

function createImage(props: React.ComponentProps<'img'>) {
  const { src, alt, width, height } = props;
  if (!src) return null;
  const numericWidth = width ? parseInt(String(width), 10) : undefined;
  const numericHeight = height ? parseInt(String(height), 10) : undefined;
  return (
      <Media 
          marginTop="8" marginBottom="16" enlarge radius="m" border="neutral-alpha-medium"
          src={src} alt={alt || ''} width={numericWidth} height={numericHeight} 
      />
  );
}

function slugify(node: React.ReactNode): string {
    if (typeof node !== 'string') return '';
    return node.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const CustomHeading = ({ children }: { children?: React.ReactNode }) => {
    const asTag = `h${level}` as keyof JSX.IntrinsicElements;
    const variantMap = {
      1: "display-strong-xs",
      2: "heading-strong-xl",
      3: "heading-strong-l",
      4: "heading-strong-m",
      5: "heading-strong-s",
      6: "heading-strong-xs",
    } as const;
    const variant = variantMap[level];
    return (
      <Heading as={asTag} variant={variant} marginTop="24" marginBottom="12">
        {children}
      </Heading>
    );
  };
  CustomHeading.displayName = `H${level}`;
  return CustomHeading;
}

function createParagraph({ children }: { children?: React.ReactNode }) {
  return <Text as="p" style={{ lineHeight: "175%" }}>{children}</Text>;
}

function createInlineCode({ children }: { children?: React.ReactNode }) {
  return <InlineCode>{children}</InlineCode>;
}

function createCodeBlock(props: any) {
  if (props.children?.props?.className) {
    const { className, children } = props.children.props;
    const language = String(className).replace('language-', '');
    const label = language.charAt(0).toUpperCase() + language.slice(1);
    return <CodeBlock marginTop="8" marginBottom="16" codes={[{ code: String(children).trim(), language, label }]} copyButton={true} />;
  }
  return <pre {...props} />;
}

const components = {
  h1: createHeading(1), h2: createHeading(2), h3: createHeading(3), h4: createHeading(4), h5: createHeading(5), h6: createHeading(6),
  p: createParagraph, a: CustomLink, img: createImage, code: createInlineCode, pre: createCodeBlock,
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
  );
}