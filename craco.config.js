module.exports = {
    babel: {
        plugins: [
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": "css" // 设置为true默认是less
                }
            ]
        ]
    }
}