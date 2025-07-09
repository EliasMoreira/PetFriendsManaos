package com.example.petfriendsmanaos.data.di

import com.example.petfriendsmanaos.data.KtorRemoteDataSource
import com.example.petfriendsmanaos.data.remote.RemoteDataSource
import dagger.Binds
import dagger.Module
import dagger.hilt.InstallIn
import javax.inject.Singleton

@Module
@InstallIn
interface DataSourceModule {
    @Binds
    @Singleton
    fun bindRemoteDataSource(remoteDataSource: KtorRemoteDataSource): RemoteDataSource
}