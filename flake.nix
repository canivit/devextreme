{
  description = "devextreme";

  outputs = { self, nixpkgs }: let
    pkgs = import nixpkgs {
      system = "x86_64-linux";
    };
  in {
    devShell.x86_64-linux = pkgs.mkShell {
      name = "devextreme";
      buildInputs = with pkgs; [
        nodejs
        nodePackages.yarn
      ];
      shellHook = ''
        export PATH=$PWD/node_modules/.bin:$PATH
      '';
    };
  };
}
