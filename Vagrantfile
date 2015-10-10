Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "ubuntu"
  config.vm.network "private_network", ip: "192.168.10.111"
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
  end
  config.vm.provision "docker",
      images: ["node:0.12.7", "mongo"]
  config.vm.provision "file", source: "~/.bash_aliases", destination: "~/.bash_aliases"
  config.vm.provision "shell", inline: <<-SHELL
    sed -i '1i force_color_prompt=yes' /home/vagrant/.bashrc
    sudo apt-get update
    curl -L https://github.com/docker/compose/releases/download/1.4.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
  SHELL
end
