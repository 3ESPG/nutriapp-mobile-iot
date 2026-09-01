type Listener = () => void;

/**
 * Store minimo em memoria usado durante a prototipacao.
 * No CP6 esta camada podera ser trocada por persistencia local ou API,
 * sem alterar as telas que consomem os hooks.
 */
export function createStore<T>(initialValue: T) {
  let value = initialValue;
  const listeners = new Set<Listener>();

  return {
    get(): T {
      return value;
    },
    set(next: T) {
      value = next;
      listeners.forEach((listener) => listener());
    },
    subscribe(listener: Listener): () => void {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}
