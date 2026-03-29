
import Joi from 'joi';

export const carSchema = Joi.object({
    brand: Joi.string()
        .regex(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)
        .required()
        .messages({
            'string.pattern.base': 'Бренд має містити лише літери (до 20 символів)',
            'string.empty': 'Поле обов’язкове для заповнення',
        }),

    price: Joi.number()
        .integer()
        .min(0)
        .max(1000000)
        .required()
        .messages({
            'number.base': 'Ціна має бути числом',
            'number.min': 'Ціна не може бути меншою за 0',
            'number.max': 'Ціна не може перевищувати 1 000 000',
        }),

    year: Joi.number()
        .integer()
        .min(1990)
        .max(2026)
        .required()
        .messages({
            'number.min': 'Рік має бути не раніше 1990',
            'number.max': 'Рік не може бути пізніше 2026',
            'number.base': 'Введіть коректний рік',
        }),
});