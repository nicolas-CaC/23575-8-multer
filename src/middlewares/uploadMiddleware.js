import multer from 'multer'
import { resolve } from 'path'

const destination = (req, file, cb) => {
    file.mimetype === 'image/jpeg'
        ? cb(null, resolve() + '/public/img')
        : cb(new Error('no te voy a guardar esa imagen'))
}

const filename = (req, file, cb) => {

    const time =
        new Date()
            .toString()
            .replace(/ /g, '_')
            .replace(/:/g, '-')
            .slice(0, 33)

    cb(null, time + '_' + file.originalname)
}

const config = { destination, filename }
const storage = multer.diskStorage(config)
export const uploadMiddleware = multer({ storage })
