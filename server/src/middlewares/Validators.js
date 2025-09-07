import { z } from 'zod';

const regsiterSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    phone: z.string().regex(/^\d{10}$/).optional()
});

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long')
});

const registerValidator = (req, res, next) => {
    const result = regsiterSchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            message : "Validation failed in register",
            errors: result.error.errors
        })
    }
    next();
}

const loginValidator = (req, res, next) => {
    const result = loginSchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            message : "Validation failed in login",
            errors: result.error.errors
        })
    }
    next();
}

export { registerValidator, loginValidator };