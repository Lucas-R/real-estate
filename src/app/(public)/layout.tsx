import Menu from "@components/menu";

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <Menu />
            { children }    
        </div>
    )
}