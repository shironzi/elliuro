import { BadRequestException, createParamDecorator, ExecutionContext } from "@nestjs/common"
import { Property_Publish } from "./property_publish.dto"

export const ValidatePublishData = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const body: Property_Publish = request.body;

        if (!body.details || body.details.length === 0) {
            throw new BadRequestException('Details are required for publishing a property.');
        }

        if (!body.amenities_list || body.amenities_list.length === 0) {
            throw new BadRequestException('Amenities are required for publishing a property.');
        }

        if (!body.images || body.images.length === 0) {
            throw new BadRequestException('Images are required for publishing a property.');
        }

        return body;
    },
);