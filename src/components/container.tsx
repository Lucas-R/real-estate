import { tv, VariantProps } from "tailwind-variants";

export const container = tv({
    base: "w-full px-4 mx-auto max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-7xl",
});

type ContainerVariants = VariantProps<typeof container>;

interface ContainerProps extends ContainerVariants {
    children: React.ReactNode,
    className?: string
};

export default function Container({ children, className, ...rest }: ContainerProps) {
    return (
        <div className={container({ className })} {...rest}>
                { children }
        </div>
    )
}