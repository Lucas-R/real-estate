import { PropertyContractProps, PropertySchema, PropertyStatusProps, PropertyTypeProps } from "@schemas/propertySchema";

export const MockData: PropertySchema[] = [
    {
        id: "000000000000",
        code: 1234,
        type: PropertyTypeProps.APARTMENT,
        status: PropertyStatusProps.AVAILABLE,
        contractType: PropertyContractProps.SALE,
        dimensions: {
            totalAreaSqm: 100,
            builtAreaSqm: 100,
        },
        financial: {
            salePrice: 250.000,
        },
        info: {
            title: "Title",
            description: "Suas conversas com VA Group não são usadas para melhorar nossos modelos. O Gemini pode cometer erros. Por isso, é bom checar as respostas. Sua privacidade e o Gemini"
        },
        media: [
            {
                type: "principal",
                description: "Uma Descrição",
                url: "https://projetaronline.com/wp-content/webp-express/webp-images/uploads/2022/08/P443-FOTOS_11-Foto-2.jpg.webp"
            }
        ],
        owner: {
            fullName: "Lucas Rodrigues",
            cpf: "000.000.000-00",
            phone: "+551397828808",
            email: "lucas.rodrigues@vagroup.com.br",
        },
        contact: {
            name: "Lucas Rodrigues",
            phone: "+551397828808",
            email: "lucas.rodrigues@vagroup.com.br",
            creci: "00000000",
        },
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        id: "000000000000",
        code: 5678,
        type: PropertyTypeProps.APARTMENT,
        status: PropertyStatusProps.AVAILABLE,
        contractType: PropertyContractProps.SALE,
        dimensions: {
            totalAreaSqm: 100,
            builtAreaSqm: 100,
        },
        financial: {
            salePrice: 250.000,
        },
        info: {
            title: "Title",
            description: "Suas conversas com VA Group não são usadas para melhorar nossos modelos. O Gemini pode cometer erros. Por isso, é bom checar as respostas. Sua privacidade e o Gemini"
        },
        media: [
            {
                type: "principal",
                description: "Uma Descrição",
                url: "../../public/mock/house.jpg"
            }
        ],
        owner: {
            fullName: "Lucas Rodrigues",
            cpf: "000.000.000-00",
            phone: "+551397828808",
            email: "lucas.rodrigues@vagroup.com.br",
        },
        contact: {
            name: "Lucas Rodrigues",
            phone: "+551397828808",
            email: "lucas.rodrigues@vagroup.com.br",
            creci: "00000000",
        },
        created_at: new Date(),
        updated_at: new Date(),
    }
]