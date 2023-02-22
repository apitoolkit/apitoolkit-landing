---
title: "Generating Golang API Doc with Go-Swagger"
date: 2022-12-04T08:00:00+00:00
author: jessica
categories:
  - APIs
--- 

![goswagger](./goswagger.jpg)
As a developer you've just completed the development of a brand-new API and now need to provide documentation to aid you when constructing client-side applications that use the API. To achieve this, you begin to consider several approaches, and you present some options such as Swagger, Docusaurus, Postman, and others. You recall the tension of the API documentation phase and wonder if there are any shortcuts to speed things up - you can't skip this phase because software is useless if no one can use it. 

As a developer, it is vital to document and arrange all APIs, but you also know that not every developer like the documentation aspect. To do so, we'll need certain tools that make it simple to create API documentation. 

## What is Swagger? 

Swagger is an open-source suite of tools for creating REST-based APIs. It speeds up the process of building APIs by setting standards and providing the tools needed to write and organize scalable APIs. Swagger makes it so easy to create, manage, and publish API documentation. Swagger is an open-source professional toolset that enables individuals, teams, and corporations to effortlessly develop and describe APIs at scale. 

### Here are some of the advantages of using Swagger in your next project: 

- Allowing you to rapidly and easily write, maintain, and publish API documentation 
- Creating visually appealing interactive documentation that allows you to validate and test API endpoints directly from your browser without the use of third-party applications. 
- Developers and non-developers alike will find it simple to understand. 
- The ability to directly produce API client libraries (SDKs) for numerous languages and frameworks from an OpenAPI specification. 

In this tutorial you will learn how to use annotation and Swag to produce Swagger documentation for Go web APIs directly from the source code.   

## How to generate Golang API documentation with Swagger 
Step 1: Make a Project Directory: Configuring your development environment 
Create a new Go project in your text editor or IDE then go ahead and load your go.mod file. You may choose any name for your package. If you don’t know how to do that, you can use the text below 

```go
mkdir goswagger 
cd goswagger 
go mod init goswagger 
```

Step 2: Installing Swagger 
```go
download_url=$(curl -s https://api.github.com/repos/go-swagger/go-swagger/releases/latest | \
  jq -r '.assets[] | select(.name | contains("'"$(uname | tr '[:upper:]' '[:lower:]')"'_amd64")) | .browser_download_url')
curl -o /usr/local/bin/swagger -L'#' "$download_url"
chmod +x /usr/local/bin/swagger 
```

Step 3: Download Dependencies 
Next, we will download the required dependencies 

For this tutorial purpose, we will make use of  

Mux: Handling http requests and routing 

Command: 
 ```go
go get github.com/gorilla/mux 
```

Swagger: Handling swagger doc 

Command: 
```go
go get github.com/go-openapi/runtime/middleware 
MySQL: Handling MySQL queries
```

Commands: 
Shape Copy Text 
```go
github.com/go-sql-driver/mysql 
go get github.com/jmoiron/sqlx 
```

Step 4: Import Database company.sql from the Root Directory 
Create main.go in the root directory. Establish database connection, routing for APIs, and Swagger documentation. 

Shape Copy Text 
 ```go
  r := mux.NewRouter() 
   dbsqlx := config.ConnectDBSqlx() 
   hsqlx := controllers.NewBaseHandlerSqlx(dbsqlx) 
   company := r.PathPrefix("/admin/company").Subrouter() 
   company.HandleFunc("/", hsqlx.PostCompanySqlx).Methods("POST") 
   company.HandleFunc("/", hsqlx.GetCompaniesSqlx).Methods("GET") 
   company.HandleFunc("/{id}", hsqlx.EditCompany).Methods("PUT") 
   company.HandleFunc("/{id}", hsqlx.DeleteCompany).Methods("DELETE") 
```

Step 5: Write Documentation using Go Swagger 
Now, let’s see how to document using Swagger. It will consist of basic configurations, models, and API routes. 

Basic Configuration 

```go
//  Comapany Api: 
//   version: 0.0.1 
//   title: Comapany Api 
//  Schemes: http, https 
//  Host: localhost:5000 
//  BasePath: / 
//  Produces: 
//    - application/json 
// 
// securityDefinitions: 
//  apiKey: 
//    type: apiKey 
//    in: header 
//    name: authorization 
// swagger:meta 
package controllers 
```

We can define security using the API key, which can be checked for each API. 

Step5: Create a Model 
You can create models for our APIs' requests and answers. Below are some structural examples with swagger comments. Every field can have a name, type, schema, required, and description. 

```go
type ReqAddCompany struct { 
   // Name of the company 
   // in: string 
   Name string `json:"name"validate:"required,min=2,max=100,alpha_space"` 
   // Status of the company 
   // in: int64 
   Status int64 `json:"status" validate:"required"` 
} 

// swagger:parameters admin addCompany 
type ReqCompanyBody struct { 
   // - name: body 
   //  in: body 
   //  description: name and status 
   //  schema: 
   //  type: object 
   //     "$ref": "#/definitions/ReqAddCompany" 
   //  required: true 
   Body ReqAddCompany `json:"body"` 
} 

// swagger:model Company 
type Company struct { 
   // Id of the company 
   // in: int64 
   Id int64 `json:"id"` 
   // Name of the company 
   // in: string 
   Name string `json:"name"` 
   // Status of the company 
   // in: int64 
   Status int64 `json:"status"` 
} 

// swagger:model CommonError 
type CommonError struct { 
   // Status of the error 
   // in: int64 
   Status int64 `json:"status"` 
   // Message of the error 
   // in: string 
   Message string `json:"message"` 
} 
```

Step 6: Set Up your API Routes 
Every route can have swagger comments. You  can specify the request and response models, the route name, the request method, the description, and, if necessary with the API key.

```go
[Text Wrapping Break] HYPERLINK "javascript:void(0);" 
```

```go
// swagger:route GET /admin/company/ admin listCompany 
// Get companies list 
// 
// security: 
// - apiKey: [] 
// responses: 
//  401: CommonError 
//  200: GetCompanies 

func (h *BaseHandlerSqlx) GetCompaniesSqlx(w http.ResponseWriter, r *http.Request) { 
   response := GetCompanies{} 
   companies := models.GetCompaniesSqlx(h.db) 
   response.Status = 1 
   response.Message = lang.Get("success") 
   response.Data = companies 
   w.Header().Set("content-type", "application/json") 
   json.NewEncoder(w).Encode(response) 
} 

// swagger:route POST /admin/company/ admin addCompany 
// Create a new company 
// 
// security: 
// - apiKey: [] 
// responses: 
//  401: CommonError 
//  200: GetCompany 
func (h *BaseHandlerSqlx) PostCompanySqlx(w http.ResponseWriter, r *http.Request) { 
   w.Header().Set("content-type", "application/json") 
   response := GetCompany{} 
   decoder := json.NewDecoder(r.Body) 
   var reqcompany *models.ReqCompany 
   err := decoder.Decode(&reqcompany) 
   fmt.Println(err) 
   if err != nil { 

       json.NewEncoder(w).Encode(ErrHandler(lang.Get("invalid_requuest"))) 
       return 
   } 
   company, errmessage := models.PostCompanySqlx(h.db, reqcompany) 
   if errmessage != "" { 
       json.NewEncoder(w).Encode(ErrHandler(errmessage)) 
       return 
   } 

   response.Status = 1 
   response.Message = lang.Get("insert_success") 
   response.Data = company 
   json.NewEncoder(w).Encode(response) 
} 

// swagger:route  PUT /admin/company/{id} admin editCompany 
// Edit a company 
// 
// consumes: 
//         - application/x-www-form-urlencoded 
// security: 
// - apiKey: [] 
// responses: 
//  401: CommonError 
//  200: GetCompany 
func (h *BaseHandlerSqlx) EditCompany(w http.ResponseWriter, r *http.Request) { 
   r.ParseForm() 

   w.Header().Set("content-type", "application/json") 
   vars := mux.Vars(r) 
   response := GetCompany{} 
   id, err := strconv.ParseInt(vars["id"], 10, 64) 
   if err != nil { 
       json.NewEncoder(w).Encode(ErrHandler(lang.Get("invalid_requuest"))) 
       return 
   } 

   var reqcompany models.ReqCompany 
   reqcompany.Status, err = strconv.ParseInt(r.FormValue("status"), 10, 64) 
   reqcompany.Name = r.FormValue("name") 
   if err != nil { 
       json.NewEncoder(w).Encode(ErrHandler(lang.Get("invalid_requuest"))) 
       return 
   } 

   company, errmessage := models.EditCompany(h.db, &reqcompany, id) 
   if errmessage != "" { 
       json.NewEncoder(w).Encode(ErrHandler(errmessage)) 
       return 
   } 

   response.Status = 1 
   response.Message = lang.Get("update_success") 
   response.Data = company 
   json.NewEncoder(w).Encode(response) 
} 

```
```go
// swagger:route DELETE /admin/company/{id} admin deleteCompany 
// Delete company 
// 
// security: 
// - apiKey: [] 
// responses: 
//  401: CommonError 
//  200: CommonSuccess 
// Create handles Delete get company 
func (h *BaseHandlerSqlx) DeleteCompany(w http.ResponseWriter, r *http.Request) { 
   vars := mux.Vars(r) 
   errmessage := models.DeleteCompany(h.db, vars["id"]) 
   if errmessage != "" { 
       json.NewEncoder(w).Encode(ErrHandler(errmessage)) 
       return 
   } 
   successresponse := CommonSuccess{} 
   successresponse.Status = 1 
   successresponse.Message = lang.Get("delete_success") 
   w.Header().Set("content-type", "application/json") 
   json.NewEncoder(w).Encode(successresponse) 
}
```

   ```go
// documentation for developers 
   opts := middleware.SwaggerUIOpts{SpecURL: "/swagger.yaml"} 
   sh := middleware.SwaggerUI(opts, nil) 
   r.Handle("/docs", sh) 
   // documentation for share 
   // opts1 := middleware.RedocOpts{SpecURL: "/swagger.yaml"} 
   // sh1 := middleware.Redoc(opts1, nil) 
   // r.Handle("/docs", sh1) 
```

After we've finished with the API, we can use the command below in the root directory to generate swagger yaml or JSON files from swagger comments. 

```go
./swagger.yaml -scan-models swagger produce spec 
```

It will create a file called swagger.yaml in the root directory. The same method can be used to generate a JSON file. 

We may add routes for documentation in the main using this file. 

Go ahead and file. 

Generate Clients using Swagger Documentation 

Swagger, as indicated earlier, isn't just for API documentation; we can also use it to construct clients. Consider the following AngularJS client creation example. 

Example: Client Generation for AngularJS. 

```go
npm install ng-swagger-gen --save-dev 
sudo node_modules/.bin/ng-swagger-gen -i ../swagger.yamal -o backend/src/app
``` 

It will generate services files for all of the APIs that will be referenced in the Swagger document. Clients for other frameworks and technologies can also be generated in the same way. 

Finally, creating a Golang documentation with swagger is not as hard as it is seem. Following the above listed processes would help you achieve that. Alternatively you can visit Github repository: go-swagger-example for complete documentation. 

 