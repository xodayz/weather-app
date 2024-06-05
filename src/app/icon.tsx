import { ImageResponse } from "next/og";

export const runtime = "chrome";
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 24,
                    background: "#022B3A",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                }}
            >
            D
            </div>
        ),
        { ...size }
    );
}