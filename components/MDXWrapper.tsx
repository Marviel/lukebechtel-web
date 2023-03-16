import { MDXProvider } from '@mdx-js/react'

interface MDXWrapperProps {
    children: React.ReactNode;
}

const MDXWrapper: React.FC<MDXWrapperProps> = ({ children }) => {
    return <MDXProvider>{children}</MDXProvider>;
};

export default MDXWrapper;