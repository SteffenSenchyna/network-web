import os

# Define the image name and tag
image_name = 'ssenchyna/network-web'
image_tag = '1.0'
# os.system(f'docker compose down')
# os.system(f'docker build -t {image_name}:{image_tag} .')
# os.system('docker login')
# os.system(f'docker push {image_name}:{image_tag}')
# os.system(f'docker-compose up')


os.system(
    f"docker buildx build --platform linux/amd64,linux/arm64 -t {image_name} --push .")
