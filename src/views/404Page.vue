<template>
    <div class="page-not-found">
      <div class="page-not-found__content">
        <h1 class="page-not-found__title">404 - Page Not Found</h1>
        <p class="page-not-found__description">Sorry, the page you were looking for could not be found.</p>
        <router-link class="page-not-found__home-link" to="/">
          Go to AboutPage
        </router-link>
      </div>
    </div>
  </template>
  
  <style>
  .page-not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .page-not-found__content {
    text-align: center;
  }
  
  .page-not-found__title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .page-not-found__description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .page-not-found__home-link {
    font-size: 2rem;
    text-decoration: none;
    color: #74b9ff;
  }
  </style>
  