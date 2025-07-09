package com.example.petfriendsmanaos.data

import com.example.petfriendsmanaos.data.model.LoginInfo
import com.example.petfriendsmanaos.data.model.LoginResponse
import com.example.petfriendsmanaos.data.remote.RemoteDataSource
import com.example.petfriendsmanaos.data.remote.response.LoginDataResponse
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.get
import io.ktor.client.request.setBody
import javax.inject.Inject

class KtorRemoteDataSource @Inject constructor(
    private val httpClient: HttpClient
): RemoteDataSource {
    companion object {
        private const val BASE_URL = "http://localhost:3000"
    }

    override suspend fun getLoginDataResponse(email: String, password: String): LoginDataResponse {
        return httpClient
            .get("${BASE_URL}/auth"){
                setBody(LoginResponse(email, password))
            }.body()
    }
}