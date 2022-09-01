import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script2 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script3 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script4 from "../d5ee9a47-8484-4824-a609-996298830b51/src/item"
import Script5 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(6, 7, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 3, 1.5)
})
externalLink.addComponentOrReplace(transform3)

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(10.5, 7, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.499999761581421, 3, 1.4999998807907104)
})
externalLink2.addComponentOrReplace(transform4)

const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(14.5, 7, 6),
  rotation: new Quaternion(-2.8107848148062504e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.2275073528289795, 1.4850000143051147, 1.4850046634674072)
})
externalLink3.addComponentOrReplace(transform5)

const externalLink4 = new Entity('externalLink4')
engine.addEntity(externalLink4)
externalLink4.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(14.5, 7, 11),
  rotation: new Quaternion(-2.8107848148062504e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.227508306503296, 2.9700000286102295, 1.4850051403045654)
})
externalLink4.addComponentOrReplace(transform6)

const externalLink5 = new Entity('externalLink5')
engine.addEntity(externalLink5)
externalLink5.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(2, 7, 7.5),
  rotation: new Quaternion(-2.8107848148062504e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.2275102138519287, 2.9700000286102295, 1.4850051403045654)
})
externalLink5.addComponentOrReplace(transform7)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(8, 5.5, 14.5),
  rotation: new Quaternion(-2.177062080483132e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(4.545003890991211, 3, 3.000002384185791)
})
videoStream.addComponentOrReplace(transform8)

const externalLink6 = new Entity('externalLink6')
engine.addEntity(externalLink6)
externalLink6.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(8.5, 1.5, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 0.5)
})
externalLink6.addComponentOrReplace(transform9)

const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
twitterButtonLink.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(7, 1.5, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
twitterButtonLink.addComponentOrReplace(transform10)

const instagramButtonLink = new Entity('instagramButtonLink')
engine.addEntity(instagramButtonLink)
instagramButtonLink.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(10, 1.5, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
instagramButtonLink.addComponentOrReplace(transform11)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(11.5, 12, 2.25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 4.5, 4.5)
})
nftPictureFrame.addComponentOrReplace(transform12)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(8, 12, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 4.5, 4.5)
})
nftPictureFrame2.addComponentOrReplace(transform13)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(4, 12, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 4.5, 4.5)
})
nftPictureFrame3.addComponentOrReplace(transform14)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(14, 12, 4.5),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.500016689300537, 4.5, 4.500016689300537)
})
nftPictureFrame4.addComponentOrReplace(transform15)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(14, 12, 8),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.50001859664917, 4.5, 4.50001859664917)
})
nftPictureFrame5.addComponentOrReplace(transform16)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(14, 12, 12),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(4.500011444091797, 4.5, 4.500011444091797)
})
nftPictureFrame6.addComponentOrReplace(transform17)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(11, 12, 13.5),
  rotation: new Quaternion(-4.47833137828574e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(4.500022888183594, 4.5, 4.500022888183594)
})
nftPictureFrame7.addComponentOrReplace(transform18)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(6.5, 12, 13.5),
  rotation: new Quaternion(-4.47833137828574e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(4.500022888183594, 4.5, 4.500022888183594)
})
nftPictureFrame8.addComponentOrReplace(transform19)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(2, 12, 8),
  rotation: new Quaternion(-1.043081283569336e-7, -0.7071067690849304, 1.862645149230957e-7, -0.7071068286895752),
  scale: new Vector3(4.50002384185791, 4.5, 4.500024318695068)
})
nftPictureFrame9.addComponentOrReplace(transform20)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(2, 12, 4.5),
  rotation: new Quaternion(-1.043081283569336e-7, -0.7071067690849304, 1.862645149230957e-7, -0.7071068286895752),
  scale: new Vector3(4.50002384185791, 4.5, 4.500024318695068)
})
nftPictureFrame10.addComponentOrReplace(transform21)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script1.spawn(externalLink, {"url":"https://oncyber.io/relms"}, createChannel(channelId, externalLink, channelBus))
script1.spawn(externalLink2, {"url":"https://teamrelms.online/station/"}, createChannel(channelId, externalLink2, channelBus))
script1.spawn(externalLink3, {"url":"https://teamrelms.online/yetiweb/"}, createChannel(channelId, externalLink3, channelBus))
script1.spawn(externalLink4, {"url":"https://relms.io/"}, createChannel(channelId, externalLink4, channelBus))
script1.spawn(externalLink5, {"url":"https://www.teamrelms.com/"}, createChannel(channelId, externalLink5, channelBus))
script2.spawn(videoStream, {"startOn":"false","onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}]}, createChannel(channelId, videoStream, channelBus))
script1.spawn(externalLink6, {"url":"https://relms.io/"}, createChannel(channelId, externalLink6, channelBus))
script3.spawn(twitterButtonLink, {"url":"teamrelmsltd","bnw":false}, createChannel(channelId, twitterButtonLink, channelBus))
script4.spawn(instagramButtonLink, {"url":"teamrelms","bnw":false}, createChannel(channelId, instagramButtonLink, channelBus))
script5.spawn(nftPictureFrame, {"id":"21648064405088684240769083474669898450324709995936328837323241895666118557697","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script5.spawn(nftPictureFrame2, {"id":"21648064405088684240769083474669898450324709995936328837323241902263188324353","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script5.spawn(nftPictureFrame3, {"id":"5382","contract":"0xEd595cFD58d32Bb9d200AaB5B9afD9dbdeBdf9F4","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script5.spawn(nftPictureFrame4, {"id":"21648064405088684240769083474669898450324709995936328837323241883571490652161","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script5.spawn(nftPictureFrame5, {"id":"21648064405088684240769083474669898450324709995936328837323241887969537163265","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script5.spawn(nftPictureFrame6, {"id":"21648064405088684240769083474669898450324709995936328837323241896765630185473","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script5.spawn(nftPictureFrame7, {"id":"21648064405088684240769083474669898450324709995936328837323241255750351192065","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script5.spawn(nftPictureFrame8, {"id":"21648064405088684240769083474669898450324709995936328837323241261247909330945","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script5.spawn(nftPictureFrame9, {"id":"21648064405088684240769083474669898450324709995936328837323241312924955836417","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script5.spawn(nftPictureFrame10, {"id":"21648064405088684240769083474669898450324709995936328837323241316223490719745","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))