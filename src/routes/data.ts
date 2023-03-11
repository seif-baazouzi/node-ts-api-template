import express, { Request, Response } from "express"
const router = express.Router()

import { Data } from "../db"

router.get("/", async (_req: Request, res: Response) => {
    try {
        const data = await Data.find()
        res.json({ data })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error!" })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const data = await Data.findById(req.params.id)
        res.json({ data })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error!" })
    }
})

router.post("/", async (req, res) => {
    const data = new Data({
        name: req.body.name,
        age: req.body.age,
    })

    try {
        const dataToSave = await data.save()
        res.json(dataToSave)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error!" })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const data = await Data.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            age: req.body.age,
        })
        res.json(data)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error!" })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const data = await Data.findByIdAndDelete(req.params.id)
        res.json(data)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error!" })
    }
})

module.exports = router
