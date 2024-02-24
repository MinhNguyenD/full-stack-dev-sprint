import Room from "../models/room.models.js";

export async function createRoom(req, res) {
  try {
    const room = new Room(req.body);
    await room.save();
    res.status(201).send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
}   

export async function getAllRooms(req, res) {
  try {
    const rooms = await Room.find({});
    res.send(rooms);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function getRoomById(req, res) {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).send();
    }
    res.send(room);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function updateRoom(req, res) {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!room) {
      return res.status(404).send();
    }
    res.send(room);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function deleteRoom(req, res) {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).send();
    }
    res.status(200).send(room);
  } catch (error) {
    res.status(500).send(error);
  }
}