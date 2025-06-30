// Code for NEW file: src/components/MdxRenderer.tsx
"use client" // MDX rendering often needs to be on the client
import { MDXRemote } from 'next-mdx-remote/rsc';

export function MdxRenderer({ content }: { content: string }) {
    return <MDXRemote source={content} />;
}