export default defineNuxtConfig({
  app: {
    baseURL: "/nuxt3-supabase-ecommerce/",
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/supabase",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],
  supabase: {
    url: "https://jxvjacysyhgktryekojx.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4dmphY3lzeWhna3RyeWVrb2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTA3MjgsImV4cCI6MjAyNjMyNjcyOH0.Wx1aVSu5YXGozMTPLgarGs0BmrPWJQH5QsaDq5vOolI",
  },
});
