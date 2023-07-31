import {PropsWithChildren} from "react";

const POSTSting = `{ "name": "Todo's name" }`;
const PUTString = `{ "id": 1, "name": "Changed name" }`;
const DeleteString = `{ "id": 1}`;
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
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="text-xl font-bold">TODOS API</h1>
      <section>
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
    </main>
  )
}
