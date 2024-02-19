module.exports = ({ env }) => ({
    // ...
    slugify: {
        enabled: true,
        config: {
            contentTypes: {
                property: {
                    field: 'slug',
                    references: 'slug',
                },
            },
        },
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('dfks8op0a'),
                api_key: env('177422599939182'),
                api_secret: env('cgqkvpORGMmkUARvLh71EU1QDQM'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    // ...
});