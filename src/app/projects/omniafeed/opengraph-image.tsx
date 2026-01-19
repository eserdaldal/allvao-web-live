import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Omniafeed - Allvao";
export const size = {
    width: 1200,
    height: 630,
};

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#FBF9F6",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Inter, sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <h1
                        style={{
                            fontSize: 100,
                            fontWeight: 300,
                            color: "#2A2D34",
                            letterSpacing: "-0.02em",
                            margin: 0,
                            marginBottom: 20,
                        }}
                    >
                        Omniafeed
                    </h1>
                    <p
                        style={{
                            fontSize: 32,
                            fontWeight: 300,
                            color: "#2A2D34",
                            opacity: 0.8,
                            margin: 0,
                        }}
                    >
                        Finansın Şeffaf Yüzü
                    </p>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
