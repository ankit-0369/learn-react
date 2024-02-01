import { Client, ID,Databases, Storage, Query  } from "appwrite";

import config from "../conf/config";

export class DatabaseService{
    client= new Client()
    database;
    storage;
    constructor(){
        this.client
        .setEndpoint(config.AppwriteUrl) // Your API Endpoint
        .setProject(config.ProjectId); //Will make connection to the appwrite services

        this.databases= new Databases(this.client)
        this.storage= new Storage(this.client)
    }

    /*
     const promise = databases
                .createDocument('[DATABASE_ID]', '[COLLECTION_ID]', '[DOCUMENT_ID]', {})
                slug is used here as document di
    */

    async createPost({title, slug, userId, content, featuredImage, status}){

        try {
            
            return await this.databases.createDocument(
                config.databaseId,
                config.collectionId,
                slug,
                {
                    title,
                    userId,
                    content,
                    featuredImage,
                    status,
                }


            )
        } catch (error) {
            console.log("service.js :: createPost:: error", error);
        }

    }

    async updatePost(slug, {title, content, featuredImage, status}){

            try {
                
                return await this.databases.updateDocument(
                    config.databaseId,
                    config.collectionId,
                    slug,
                    {
                        content, 
                        status,
                        featuredImage,
                        title
                    }
                )
            } catch (error) {
                console.log("service.js::updatePost::error", error);
            }
    }


    async deletePost(slug){
        try {
            
            return await this.databases.deleteDocument(
                config.databaseId,
                config.collectionId,
                slug
            )
        } catch (error) {
            console.log("service.js::deletePost::error", error);
        }
    }

    async getPost(slug){

        try {
            
            return await this.databases.getDocument(
                config.databaseId,
                config.collectionId,
                slug
            )
        } catch (error) {
            console.log("service.js::getPost::error", error);
        }
    }

    async getPosts(queries= [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                config.databaseId,
                config.collectionId,
                queries
            )
        } catch (error) {
            console.log("service.js::getPost::error", error);
        }
    }

    //file handling from now---we need to define createFIle, deleteFile, getPreview

    async uploadFile(file){
        try {
            return await this.storage.createFile(config.bucketId, ID.unique(), file)

        } catch (error) {
            console.log("service.js::uploadFile::error ", error)
            
        }
    }

    async deleteFile(fileId){
        try {
            return await this.storage.deleteFile(config.bucketId, fileId)

        } catch (error) {
            console.log("service.js :: deleteFile :: error", error)

        }
    }

        getFilePreview(fileId){
            // console.log("file id of getFilePreview : ",fileId)
        return this.storage.getFilePreview(config.bucketId, fileId)
       
     }


}

const databaseService= new DatabaseService()


export default databaseService