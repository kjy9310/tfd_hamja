
export type ModuleStat = {
    level: number;
    module_capacity: number;
    value: string;
}

export type Module = {
    module_name: string;
    module_id: string;
    image_url: string;
    module_type: string;
    module_tier: string;
    module_socket_type: string;
    module_class : string;
    module_stat: ModuleStat[]
}
