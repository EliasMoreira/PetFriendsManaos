package com.example.petfriendsmanaos.data.di

import com.example.petfriendsmanaos.data.repository.AuthRepository
import com.example.petfriendsmanaos.data.repository.AuthRepositoryImpl
import dagger.Binds
import dagger.Module
import dagger.hilt.InstallIn
import dagger.hilt.android.components.ViewModelComponent

interface RepositoryModule {
    @Module
    @InstallIn(ViewModelComponent::class)
    interface RepositoryModule {

        @Binds
        fun bindWeatherRepository(repository: AuthRepositoryImpl): AuthRepository
    }
}