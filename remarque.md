Voici mes remarques : 

- fais bien la diff entre component et objet
un component c'est un object qui est rendu à l'écran, il contient state et props
: props sont les propriétés de ton component -> ils arrivent de l'extérieur 
: state est l'état interne de ton component -> il permet de faire évoluer ton component seul

- un component peut appeler un autre composant et lui injecter des props 
- un component ne peut pas appeler directement la propriété d'un autre composant 

Dans le cas de la liste de taches : 
- tu as créé deux components : 1 liste de taches qui contient des taches
- étant donné que ta taches est un composant, il ne peu pas être une données. 
- il faut que tu te représente les données que tes composants vont manipuler. 

