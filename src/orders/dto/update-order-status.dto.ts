import { IsIn } from "class-validator";

export class UpdateOrderStatusDto {
  @IsIn(["new", "preparing", "ready", "completed", "cancelled"])
  status: "new" | "preparing" | "ready" | "completed" | "cancelled";
}