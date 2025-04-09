export interface ApiDeliveryResponse {
    message: string;
    success: boolean;
    status: number;
    data?: any;
    error?: any;

}

export interface ApiResponse {
    error?: string;
    data: {
        success?: string;
        error?: string;
        data: any;
    },
}