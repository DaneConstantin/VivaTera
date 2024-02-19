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
    // ...
});