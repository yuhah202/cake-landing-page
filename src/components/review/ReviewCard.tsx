import { Star } from "lucide-react";
import React from "react";
import { Text, TypographyH5 } from "../ui/Typography";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function ReviewCard() {
  return (
    <article className="col-span-1 flex flex-col gap-y-6 border border-solid border-border first:border-l-0 last:border-r-0 [&:nth-child(2n)]:border-x-0 p-4">
      <div className="space-y-4">
        <div className="flex items-center gap-x-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={24}
              className="fill-[#E5BF4A] stroke-[#E5BF4A]"
            />
          ))}
        </div>
        <Text className="text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          aut sed aspernatur velit tempore itaque? Voluptas error consectetur
          accusantium, nulla nobis odit natus veniam. Dolorum impedit illo
          maiores assumenda quidem?
        </Text>
      </div>

      <div className="flex items-center gap-x-6">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <TypographyH5>Lorem, ipsum dolor.</TypographyH5>
      </div>
    </article>
  );
}

export default ReviewCard;
