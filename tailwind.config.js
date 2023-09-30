/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "color-primary": "var(--color-primary)",
                "color-primary-light": "var(--color-primary-light)",
                "color-text": "var(--color-text)",
                "color-text-dark": "var(--color-text-dark)",
                "color-background-100": "var(--color-background-100)",
                "color-background-500": "var(--color-background-500)",
                "color-background-900": "var(--color-background-900)",
                "color-red": "var(--color-red)",
                "color-red-dark": "var(--color-red-dark)",
            },
        },
    },
    plugins: [],
};
