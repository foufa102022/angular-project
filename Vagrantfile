# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # Set the machine name to "serveur"
  config.vm.define "serveur"

  # Use the Ubuntu Bionic64 box
  config.vm.box = "ubuntu/bionic64"

  # Configure a bridged network to obtain an IP from the physical network
  config.vm.network "public_network", bridge: "bridged"

  # Optional: Configure forwarded ports for specific services
  config.vm.network "forwarded_port", guest: 80, host: 8080  # Example port forwarding, adjust as needed
  config.vm.network "forwarded_port", guest: 2375, host: 2375  # Docker daemon port

  # Enable SSH access
  config.ssh.insert_key = false

  # Install Docker and Docker Compose
  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
    sudo apt-get install -y docker.io docker-compose

    # Add user to the docker group
    sudo usermod -aG docker vagrant

    # Configure Docker to listen on port 2375
    sudo mkdir -p /etc/systemd/system/docker.service.d
    echo "[Service]" | sudo tee /etc/systemd/system/docker.service.d/options.conf
    echo "ExecStart=" | sudo tee -a /etc/systemd/system/docker.service.d/options.conf
    echo "ExecStart=/usr/bin/dockerd -H unix:// -H tcp://0.0.0.0:2375" | sudo tee -a /etc/systemd/system/docker.service.d/options.conf

    # Reload systemd daemon and restart Docker
    sudo systemctl daemon-reload
    sudo systemctl restart docker
  SHELL
end
