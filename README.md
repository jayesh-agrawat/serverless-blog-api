# Serverless Blog API Documentation

Welcome to the documentation for the Serverless Blog API. This API allows you to create, read, update, and delete blog posts through various endpoints, showcasing the functionality of backend development using Google Cloud Functions, MongoDB, and Node.js.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
   - [Create a New Blog Post](#create-a-new-blog-post)
   - [Get All Blog Posts](#get-all-blog-posts)
   - [Get a Single Blog Post by ID](#get-a-single-blog-post-by-id)
   - [Update a Blog Post](#update-a-blog-post)
   - [Delete a Blog Post](#delete-a-blog-post)

- [Error Handling](#error-handling)
- [Deployment](#deployment)
- [Conclusion](#conclusion)

## Introduction

The Serverless Blog API is a demonstration project that showcases how to build a simple backend using Google Cloud Functions, MongoDB, and Node.js. The API provides endpoints for performing CRUD (Create, Read, Update, Delete) operations on blog posts. It aims to demonstrate the principles of RESTful API design while leveraging serverless architecture.

## Getting Started

To use the Serverless Blog API, you'll need the following:

- A Google Cloud Platform account
- A MongoDB instance or cluster
- Node.js and npm installed on your local machine

Follow these steps to set up and run the API:

1. Clone the project repository:

```sh
git clone https://github.com/jay-agrawat/serverless-blog-api
cd serverless-blog-api
```

Note : Currently Above Repository is Private

2. Install the project dependencies:

```sh
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory and define the following variables:

```sh
MONGODB_URI=your-mongodb-uri
```

4. Deploy the Cloud Functions:
Deploy the Cloud Functions using the Google Cloud SDK or other deployment methods.

```sh
gcloud functions deploy blog_api_v1 --gen2 --runtime=nodejs20 --region=us-central1 --source=. --entry-point=app --trigger-http --allow-unauthenticated --memory 512Mi --max-instances=1
```

## Endpoints

__Base URL__: `https://us-central1-abiding-sunset-390217.cloudfunctions.net/blog_api_v1`

### Create a New Blog Post

- Method: POST

- Endpoint: `/posts`

- Request Body:

```json
{
  "title": "Sample Title",
  "content": "Sample Content",
  "author": "John Doe"
}
```

- Response: `201 Created` with the newly created post ID.

### Get All Blog Posts

- Method: GET
- Endpoint: `/posts`
- Response: `200 OK` with an array of blog post objects.

### Get a Single Blog Post by ID

- Method: GET
- Endpoint: `/posts/{postId}`
- Response: `200 OK` with the blog post object or `404 Not Found` if the post doesn't exist.

### Update a Blog Post

- Method: PUT

- Endpoint: `/posts/{postId}`

- Request Body:

```json
{
  "title": "Updated Title",
  "content": "Updated Content"
}
```

- Response: `200 OK` with a success message.

### Delete a Blog Post

- Method: DELETE
- Endpoint: `/posts/{postId}`
- Response: `200 OK` with a success message.

## Error Handling

The API provides meaningful error responses for various scenarios, including missing or invalid input data, resource not found, and internal server errors. The appropriate HTTP status codes are used to indicate the outcome of each request.

## Deployment

Deploying the Cloud Functions can be done using the Google Cloud SDK or other deployment methods. Make sure to configure the necessary environment variables for connecting to your MongoDB instance.

```json
gcloud functions deploy hello-node-function \
  --gen2 \      
  --runtime=nodejs20 \
  --region=us-central1 \
  --source=. \
  --entry-point=helloGET \
  --trigger-http \
 y--memory 512Mi --max-instances=1
```

## Conclusion

The Serverless Blog API is a practical example of building a backend using Google Cloud Functions, MongoDB, and Node.js. It demonstrates how to implement CRUD operations and follows RESTful API design principles. Feel free to use this project as a foundation for learning and building more advanced applications.
