import { BadRequestException, createParamDecorator, ExecutionContext } from "@nestjs/common"
import { PropertyPublishDto } from "./property_publish.dto"

export const ValidatePropertyData = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const body: PropertyPublishDto = request.body;

        if (!body.details || Object.keys(body.details).length === 0) {
            throw new BadRequestException('Details are required for publishing a property.');
        }

        if (!body.amenities || Object.keys(body.amenities).length === 0) {
            throw new BadRequestException('Amenities are required for publishing a property.');
        }

        if (!body.images || body.images.length === 0) {
            throw new BadRequestException('Images are required for publishing a property.');
        }

        return body;
    },
);