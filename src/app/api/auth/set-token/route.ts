export async function POST(request: Request) {
    const req = await request.json();

    const token = req?.data?.token;

    if (!token) {
        return new Response(
            JSON.stringify({ error: "session token not received !" }),
            { status: 400 }
        );
    }

    return new Response(JSON.stringify({ req }), {
        status: 200,
        headers: { "Set-Cookie": `sessionToken=${token}; path=/` },
    });
}
