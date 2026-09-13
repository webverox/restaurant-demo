export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export const menuItems: MenuItem[] = [
  {
    name: "Charred octopus",
    description: "white bean, preserved lemon, smoked paprika",
    price: "22",
  },
  {
    name: "Crispy oyster mushrooms",
    description: "black garlic, spring onion, sesame",
    price: "18",
  },
  {
    name: "Ember-roasted carrots",
    description: "whipped feta, dill oil, hazelnut",
    price: "16",
  },
  {
    name: "Dry-aged ribeye",
    description: "bone marrow jus, watercress, sea salt",
    price: "38",
  },
];
