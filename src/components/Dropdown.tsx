import { Menu } from "@headlessui/react";
import { ChevronDown, ChevronRight } from "lucide-react";

export const Dropdown = ({ index, question, answer }: {
    index: int
    question: string
    answer?: string
}) => {
    return (
    <div className="bg-orange-500 p-4 rounded-xl max-w-md mx-auto space-y-4">
      {
          <Menu as="div" className="relative block text-left" key={index}>
          {({ open }) => (
            <>
              <Menu.Button
                className={`flex w-full items-center justify-between gap-x-2 rounded-md bg-white px-4 py-3 text-left text-lg font-semibold text-black shadow-sm ring-1 ring-inset ${
                  open ? "ring-gray-300" : "border border-blue-500"
                }`}
              >
                {question}
                {open ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </Menu.Button>

                {open && (
                <Menu.Items
                  static
                  className="mt-1 rounded-md bg-white px-4 py-2 text-sm text-gray-800 shadow-md ring-1 ring-black/10"
                >
                  {answer}
                </Menu.Items>
              )}
            </>
          )}
        </Menu>
      }
    </div>
  );
}
