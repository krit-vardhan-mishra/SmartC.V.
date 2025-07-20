class ApiResponse {
    constructor(statusCode, data, status, message = "success fully fetched") {
      this.status = status;
      this.statusCode = statusCode;
      this.data = data;
      this.message = message;
  
      this.success = statusCode < 400;
      this.success = true;
    }
  }
  
  export { ApiResponse };
  