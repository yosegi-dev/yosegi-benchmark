import type { Density } from "~/models";
export interface FollowButtonProps {
    /** Whether the viewer already follows this account. */
    following: boolean;
    /** Called with the state the button is moving to, not the current one. */
    onFollowToggle: (following: boolean) => void;
    /** Spacing scale, which here selects the control height. */
    density?: Density;
}
export declare function FollowButton({ following, onFollowToggle, density, }: FollowButtonProps): import("react").JSX.Element;
