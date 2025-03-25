import React from "react";
import { Construction, Hammer, Wrench } from "lucide-react";
import { Logo } from "../../components/navbar/menu/logo/Logo";

export function Construccion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="relative">
          <Construction className="w-32 h-32 text-indigo-600 mx-auto mb-6 animate-bounce" />
          <Hammer className="w-8 h-8 text-purple-500 absolute -right-0 top-0 animate-pulse" />
          <Wrench className="w-8 h-8 text-purple-500 absolute -left-0 bottom-0 animate-pulse" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sitio en Construcción
        </h1>
        <div className="flex justify-center items-center">
          <Logo width={"w-96"} height={"h-40"} />
        </div>
        <p className="text-xl text-gray-600 max-w-md mx-auto mb-8">
          Estamos trabajando arduamente para traerte algo increíble. ¡Vuelve
          pronto!
        </p>

        <div className="flex justify-center gap-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-indigo-600 animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
