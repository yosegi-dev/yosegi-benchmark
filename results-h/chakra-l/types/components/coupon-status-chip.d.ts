export interface CouponStatusChipProps {
    /** Current coupon state; picks the dot colour. */
    state: "online" | "idle" | "offline" | "error";
    /** Text shown after the dot. */
    label: string;
    /** Controls the dot and text size. */
    size?: "sm" | "md" | "lg";
}
export declare function CouponStatusChip({ state, label, size }: CouponStatusChipProps): import("react").JSX.Element;
