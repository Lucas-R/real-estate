export enum PropertyTypeProps {
    APARTMENT   = "Aparpamento",
    COMMERCIAL  = "Comercial",
    FARM        = "Fazenda",
    LAND        = "Terreno",
    RURAL       = "Rural",
    HOUSE       = "Casa",
    OTHER       = "Outro"
}

export enum PropertyStatusProps {
    UNAVAILABLE = 'Indisponível',
    AVAILABLE   = 'Disponível',
    RENTED      = 'Alugado',
    SOLD        = 'Vendido',
}

export enum PropertyContractProps {
    SEASONAL    = 'Temporada',
    RENTAL      = 'Aluguel',
    SALE        = 'Venda',
    OTHER       = 'Outro',
}

interface PropertyFeaturesProps {
    bedrooms?           : number;
    suites?             : number;
    bathrooms?          : number;
    parkingSpaces?      : number;
    livingRooms?        : number;
    balconies?          : number;
    serviceArea?        : boolean;
    maidQuarters?       : boolean;
    office?             : boolean;
    backyard?           : boolean;
    swimmingPool?       : boolean;
    barbecueGrill?      : boolean;
    concierge?          : boolean;
    security24h?        : boolean;
    elevator?           : boolean;
    furnished?          : boolean;
    airConditioning?    : boolean;
    otherFeatures?      : string[];
}

interface PropertyOwnerProps {
    fullName    : string,
    cpf         : string,
    phone       : string,
    email       : string,
}

interface PropertyContactProps {
    name    : string,
    phone   : string,
    email   : string,
    creci   : string,
}

interface PropertyMediaProps {
    type: "principal" | "photo" | "video" | "floorPlan" | "virtualTour" | "other"; 
    url: string, 
    description: string
}

export interface PropertySchema {
    id: string,
    code: number,
    type: PropertyTypeProps,
    status: PropertyStatusProps,
    contractType: PropertyContractProps,
    dimensions: {
        totalAreaSqm: number,
        builtAreaSqm: number,
    },
    financial: {
        salePrice?: number,
        rentalPrice?: number,
        condominium?: number,
        tax?: number,
    },
    info: {
        title: string,
        description: string
    }
    media: PropertyMediaProps[],
    owner: PropertyOwnerProps,
    contact: PropertyContactProps,
    created_at: Date,
    updated_at: Date,
  };