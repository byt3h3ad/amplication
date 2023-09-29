/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConversationTypeWhereUniqueInput } from "./ConversationTypeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ConversationTypeUpdateInput } from "./ConversationTypeUpdateInput";

@ArgsType()
class UpdateConversationTypeArgs {
  @ApiProperty({
    required: true,
    type: () => ConversationTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConversationTypeWhereUniqueInput)
  @Field(() => ConversationTypeWhereUniqueInput, { nullable: false })
  where!: ConversationTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ConversationTypeUpdateInput,
  })
  @ValidateNested()
  @Type(() => ConversationTypeUpdateInput)
  @Field(() => ConversationTypeUpdateInput, { nullable: false })
  data!: ConversationTypeUpdateInput;
}

export { UpdateConversationTypeArgs as UpdateConversationTypeArgs };
