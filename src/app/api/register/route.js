let users = []; 

export async function POST(request) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new Response(
      JSON.stringify({ message: "Missing required fields" }),
      { status: 400 }
    );
  }

  const existing = users.find((u) => u.email === email);
  if (existing) {
    return new Response(
      JSON.stringify({ message: "User already exists" }),
      { status: 409 }
    );
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password,
  };
  users.push(newUser);

  return new Response(
    JSON.stringify({
      message: "User created",
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    }),
    { status: 201 }
  );
}

export function getUsers() {
  return users;
}
