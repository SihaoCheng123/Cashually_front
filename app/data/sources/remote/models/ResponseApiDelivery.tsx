export interface ApiDeliveryResponse {
    message: string;
    success: boolean;
    status: number;
    data?: any;
    error?: any;

}

export interface ApiResponse<T = any> {
    success?: string;
    error?: string;
    data: T,
}