import {PropsWithChildren} from "react";

const POSTSting = `{ "name": "Todo's name" }`;
const PUTString = `{ "id": 1, "status": "completed" }`;
const DeleteString = `{ "id": 1}`;
const POSTStringUser = `{
  "first_name": "John",
  "last_name": "Doe"
}`
const StyledMethod = ({ children, className }: PropsWithChildren<{ className?: string }>) => (
  <span
    className={`px-4 py-2 rounded-md font-bold mr-8 ${className}`}
  >
    {children}
  </span>
);

const StyledEndpoint = ({ children }: PropsWithChildren) => <em className="bg-slate-500 px-4 py-2 rounded-md font-bold">{children}</em>
;
  const StyledCode = ({ children }: PropsWithChildren) => <code className="bg-orange-100 text-slate-500 py-8 px-2 block rounded-md">{children}</code>
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-16  ">
      <h1 className="text-3xl font-bold mb-16">TODOS API</h1>
      <section className="max-w-sm">
        <h2 className="text-2xl font-bold mb-16">TODOS</h2>
        <div className="mb-8">
          <h3>
            <StyledMethod className="bg-green-500">GET</StyledMethod>
            <StyledEndpoint>/api/todos</StyledEndpoint>
          </h3>
        </div>
        <div className="mb-8">
          <h3 className="mb-4">
            <StyledMethod className="bg-teal-500">POST</StyledMethod>
            <StyledEndpoint>/api/todos</StyledEndpoint>
          </h3>
          <StyledCode>
            {POSTSting}
          </StyledCode>
        </div>
        <div className="mb-8">
          <h3 className="mb-4">
            <StyledMethod className="bg-orange-500">PUT</StyledMethod>
            <StyledEndpoint>/api/todos</StyledEndpoint>
          </h3>
          <StyledCode>
            {PUTString}
          </StyledCode>
        </div>
        <div className="mb-8">
          <h3 className="mb-4">
            <StyledMethod className="bg-red-500">DELETE</StyledMethod>
            <StyledEndpoint>/api/todos</StyledEndpoint>
          </h3>
          <StyledCode>
            {DeleteString}
          </StyledCode>
        </div>
      </section>
      <section className="max-w-sm">
        <h2 className="text-2xl font-bold mb-16">USERS</h2>
        <div className="mb-8">
          <h3>
            <StyledMethod className="bg-green-500">GET</StyledMethod>
            <StyledEndpoint>/api/users</StyledEndpoint>
          </h3>
        </div>
        <div className="mb-8">
          <h3>
            <StyledMethod className="bg-green-500">GET</StyledMethod>
            <StyledEndpoint>/api/users/:user_id/todos</StyledEndpoint>
          </h3>
        </div>
        <div className="mb-8">
          <h3 className="mb-4">
            <StyledMethod className="bg-teal-500">POST</StyledMethod>
            <StyledEndpoint>/api/users</StyledEndpoint>
          </h3>
          <StyledCode>
            {POSTStringUser}
          </StyledCode>
        </div>
      </section>
    </main>
  )
}
