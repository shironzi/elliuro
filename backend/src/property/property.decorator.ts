import { BadRequestException, createParamDecorator, ExecutionContext, PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";
import { PropertyPublishDto } from "./property_publish.dto";

export const ValidatePropertyData = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const body: PropertyPublishDto = request.body;

        if (!body.details) {
            throw new BadRequestException('Property details are required.');
        }

        if (!body.details.title) {
            throw new BadRequestException('Title is required for publishing a property.');
        }

        if (!body.details.description) {
            throw new BadRequestException('Description is required for publishing a property.');
        }

        if (!body.details.location) {
            throw new BadRequestException('Location is required for publishing a property.');
        }

        if (!body.details.price) {
            throw new BadRequestException('Price is required for publishing a property.');
        }

        if (!body.details.type) {
            throw new BadRequestException('Type is required for publishing a property.');
        }

        if (!body.amenities || body.amenities.length === 0) {
            throw new BadRequestException('Amenities are required for publishing a property.');
        }

        if (!body.images || body.images.length === 0) {
            throw new BadRequestException('Images are required for publishing a property.');
        }

        return body;
    },
);