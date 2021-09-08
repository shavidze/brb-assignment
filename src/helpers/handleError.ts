export function handleError(error: any): string {
    if (error.response) {
        let message = "";
        switch (error.response.status) {
            case 401:
                message = error.response.data.message;
                break;
            case 400:
            case 403:
            case 404:
            case 500:
                message = error.response.data.message;
                break;
            default:
                message = "Unexpected Error";
        }
        return message;
    } else if (error.request) {
        return "Connection Error";
    } else {
        return "Unexpected Error";
    }
}
