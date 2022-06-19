module.exports = async function (router) {
    router.get("/", async (req, res) => {
        res.send("Hello World!");
    });
};
